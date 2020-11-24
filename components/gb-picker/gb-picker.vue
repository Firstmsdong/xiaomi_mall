<template>
	<view>
		<picker
			mode="multiSelector" 
			@change="change" 
			@columnchange="columnchange"
			:value="multiIndex" 
			:range="range" 
			range-key="name">
			<slot></slot>
			
			<!-- <text>{{range[0][multiIndex[0]]['name']+'/'+range[1][multiIndex[1]]['name']+'/'+range[2][multiIndex[2]]['name']}}</text> -->
		</picker>
	</view>
</template>

<script>
	const gb2260 = require('gb2260');
	const revision = gb2260.register('201607', require('gb2260/lib/201607'))
	const gb = new gb2260.GB2260(revision);
	
	/**
	 * 地区联动选择器 
	 * @property {codeString} code 以地区编码的形式设置默认值
	 * @property {nameString} name 以省、市、区的名称数组的形式设置默认值
	 * @property {provincesRangeArray,provincesString} provincesRange 设置省的范围
	 * @property {prefecturesRangeArray,prefecturesString} prefecturesRange 设置市的范围
	 * @property {countiesRangeArray,countiesRangeString} countiesRange 设置区的范围
	 * @property {returnTypeString} returnType 设置自定义事件的返回值的类型
     */
	
	export default {
		props: {
			code: {
				type: String,
				default: ''
			},
			name: {
				type: Array,
				default:() => []
			},
			provincesRange: {
				type: [String, Array],
				default: ''
			},
			prefecturesRange: {
				type: [String, Array],
				default: ''
			},
			countiesRange: {
				type: [String, Array],
				default: ''
			}
		},
		data() {
			return {
				range: [[],[],[]],
				multiIndex: [0,0,0],
				provinces: [], // 省的集合
				prefectures: [], // 市的集合
			};
		},
		created() {
			this.setProvincesToRange()
			this.setPrefecturesToRange()
			this.setCountiesToRange()
		},
		beforeMount () {
			this.initPicker()
		},
		watch: {
			code (newVal, oldVal) {
				// this.initPicker()
			},
			name (newVal, oldVal) {
				// this.initPicker()
			}
		},
		methods: {
			initPicker() {
				if (this.code) {
					const countryCode =  this.code
					const [a,b,c,d,e,f] = countryCode.split('')
					const provinceCode = `${a}${b}0000`
					const prefectureCode = `${a}${b}${c}${d}00`
					const codeColumn = [provinceCode,prefectureCode,countryCode]
					
					for(let i = 0; i < this.range.length; i++) {
						const {range} = this
						
						const index = range[i].findIndex((value, index, arr) => {
							return value.code === codeColumn[i]
						})
						
						this.$set(this.multiIndex, i, index)
						
						if (i === 0) {
							this.setPrefecturesToRange()
						}else if (i === 1) {
							this.setCountiesToRange()
						}
					}
				}else if(this.name.length > 1 && this.name.length < 4){
					const {name} = this
					
					for(let i = 0; i < this.range.length; i++) {
						const {range} = this
						
						const index = range[i].findIndex((value, index, arr) => {
							return value.name === name[i]
						})
						
						this.$set(this.multiIndex, i, index)
						
						if (i === 0) {
							this.setPrefecturesToRange()
						}else if (i === 1) {
							this.setCountiesToRange()
						}
					}
				}
				this._emit('update')
			},
			_emit (eventName) {
				const {range,multiIndex} = this
				const {code} = range[2][multiIndex[2]]
				const name =[range[0][multiIndex[0]]['name'], range[1][multiIndex[1]]['name'], range[2][multiIndex[2]]['name']] 
				
				this.$emit(eventName, {code, name})
			},
			change (e) {
				const {detail: {value}} = e
				this.multiIndex = value
				this._emit('change')
			},
			columnchange (e) {
				const {detail: {column, value}} = e
				
				this.$set(this.multiIndex, column, value)
				
				if (column === 0) {
					this.setPrefecturesToRange()
					this.setCountiesToRange()
				}else if (column === 1){
					this.setCountiesToRange()
				}
			},
			setProvincesToRange () {
				this.provinces = this.provincesFilter()
				
				this.$set(this.range, 0, this.provinces)
			},
			setPrefecturesToRange() {
				const {range:[range], multiIndex:[index]} = this
				
				const provinceCode = range[index].code
				this.prefectures = this.prefecturesFilter(provinceCode)
				if (this.prefectures.length - 1 < this.multiIndex[1]) {
					
					this.$set(this.multiIndex, 1, 0)
				}
				
				this.$set(this.range, 1, this.prefectures)
			},
			setCountiesToRange() {
				const {range:[,range], multiIndex:[,index]} = this
				
				const prefectureCode = range[index].code
				this.counties = this.countiesFilter(prefectureCode)
				if (this.counties.length - 1 < this.multiIndex[2]) {
					this.$set(this.multiIndex, 2, 0)
				}
				
				this.$set(this.range, 2, this.counties)
			},
			// 过滤出需要的省
			provincesFilter() {
				return this.rangeFilter(this.provincesRange, () => {
					return gb.provinces().filter(item => {
						// 710000	台湾省						
						// 810000	香港特别行政区						
						// 820000	澳门特别行政区
						// 台湾省、香港特别行政区和澳门特别行政区暂缺地市和区县信息。
						return item.code !== '710000' && item.code !== '810000' && item.code !== '820000' 
					})
				})
			},
			// 过滤出需要的市
			prefecturesFilter(code) {
				return this.rangeFilter(this.prefecturesRange, () => {
					return gb.prefectures(code)
				})
			},
			// 过滤出需要的市区
			countiesFilter(code) {
				return this.rangeFilter(this.countiesRange, () => {
					return gb.counties(code)
				})
			},
			rangeFilter(range, callback) {
				if (range === '') {
					return callback()
				}
				
				if (Array.isArray(range)) {
					return callback()
					.filter(item => range.includes(item.name))
				}else{
					return callback()
					.filter(item => item.name === range)
				}
			}
		}
	}
</script>

<style lang="scss">

</style>
