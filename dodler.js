(function() {
    'use strict';
let images={
		delete:'<svg style="width:16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><path style="fill:#2D527C;" d="M334.885,98.803c-1.182,0-2.381-0.142-3.579-0.439c-7.951-1.97-12.801-10.013-10.83-17.965  l5.66-22.846l-99.892-24.752l-5.662,22.846c-1.97,7.951-10.021,12.801-17.965,10.83c-7.951-1.97-12.801-10.014-10.83-17.965  l9.229-37.244c1.97-7.952,10.02-12.8,17.965-10.83L347.67,32.325c3.818,0.946,7.105,3.369,9.136,6.739  c2.031,3.37,2.64,7.408,1.694,11.226l-9.229,37.245C347.597,94.288,341.542,98.803,334.885,98.803z"/><g>	<polygon style="fill:#CEE8FA;" points="177.957,497.166 111.947,497.166 85.536,153.586 177.957,153.586  "/>	<polygon style="fill:#CEE8FA;" points="361.805,497.166 295.795,497.166 295.795,153.586 388.217,153.586  "/></g><path style="fill:#2D527C;" d="M445.095,146.789L74.039,54.848c-7.945-1.971-15.995,2.876-17.965,10.83  c-1.971,7.952,2.878,15.995,10.83,17.965l222.414,55.11h-111.36h-6.349H85.535c-4.131,0-8.075,1.724-10.883,4.754  c-2.808,3.032-4.223,7.096-3.907,11.217l26.412,343.581c0.593,7.728,7.038,13.696,14.79,13.696h66.011h46.21  c8.191,0,14.833-6.642,14.833-14.833c0-8.191-6.642-14.833-14.833-14.833h-31.377V168.419h88.169v328.747  c0,8.191,6.642,14.833,14.833,14.833h66.01c7.752,0,14.196-5.967,14.79-13.696l25.491-331.609l35.874,8.89  c1.199,0.297,2.397,0.439,3.579,0.439c6.657,0,12.712-4.515,14.385-11.269C457.897,156.802,453.048,148.759,445.095,146.789z   M101.552,168.419h61.573v313.914h-37.442L101.552,168.419z M348.068,482.333h-37.439V168.419H372.2L348.068,482.333z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
		table: '<svg style="width:16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 455 455" style="enable-background:new 0 0 455 455;" xml:space="preserve"><g>	<rect x="40" y="317.595" style="fill:#9BFBFF;" width="98.333" height="60.19"/>	<rect x="178.333" y="117.215" style="fill:#9BFBFF;" width="49.167" height="60.19"/>	<rect x="178.333" y="317.595" style="fill:#9BFBFF;" width="49.167" height="60.19"/>	<rect x="40" y="117.215" style="fill:#9BFBFF;" width="98.333" height="60.19"/>	<rect x="40" y="217.405" style="fill:#9BFBFF;" width="98.333" height="60.19"/>	<rect x="178.333" y="217.405" style="fill:#9BFBFF;" width="49.167" height="60.19"/>	<rect x="316.667" y="217.405" style="fill:#46F8FF;" width="98.333" height="60.19"/>	<rect x="227.5" y="117.215" style="fill:#46F8FF;" width="49.167" height="60.19"/>	<rect x="316.667" y="117.215" style="fill:#46F8FF;" width="98.333" height="60.19"/>	<rect x="316.667" y="317.595" style="fill:#46F8FF;" width="98.333" height="60.19"/>	<rect x="227.5" y="217.405" style="fill:#46F8FF;" width="49.167" height="60.19"/>	<rect x="227.5" y="317.595" style="fill:#46F8FF;" width="49.167" height="60.19"/>	<path style="fill:#2488FF;" d="M415,117.215v60.19h-98.333v-60.19h-40v60.19h-98.334v-60.19h-40v60.19H40v-60.19H0v300.57h455   v-300.57H415z M40,317.595h98.333v60.19H40V317.595z M178.333,317.595h98.334v60.19h-98.334V317.595z M316.667,317.595H415v60.19   h-98.333V317.595z M415,217.405v60.19h-98.333v-60.19H415z M276.667,217.405v60.19h-98.334v-60.19H276.667z M138.333,217.405v60.19   H40v-60.19H138.333z"/>	<rect y="37.215" style="fill:#005ECE;" width="227.5" height="80"/>	<rect x="227.5" y="37.215" style="fill:#003F8A;" width="227.5" height="80"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>',
		select: '<svg style="width:16px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 60 60" style="enable-background:new 0 0 60 60;" xml:space="preserve"><g>	<path style="fill:#434C6D;" d="M59.261,46.849L44.166,29.152c-0.25-0.293-0.645-0.418-1.02-0.316   c-0.373,0.1-0.654,0.405-0.725,0.784l-4.224,22.873c-0.08,0.434,0.134,0.869,0.525,1.07c0.146,0.075,0.302,0.111,0.458,0.111   c0.265,0,0.525-0.105,0.719-0.305l6.879-7.115l3.484,13.003C50.383,59.706,50.787,60,51.228,60c0.086,0,0.173-0.011,0.26-0.034   c0.533-0.143,0.85-0.691,0.707-1.225l-3.484-13.003l9.514,2.722c0.424,0.117,0.877-0.05,1.116-0.421S59.547,47.185,59.261,46.849z"/>	<g>		<path style="fill:#7383BF;" d="M35.5,52H35c-0.553,0-1-0.447-1-1s0.447-1,1-1h0.5c0.553,0,1,0.447,1,1S36.053,52,35.5,52z"/>		<path style="fill:#7383BF;" d="M31.118,52h-0.971c-0.553,0-1-0.447-1-1s0.447-1,1-1h0.971c0.553,0,1,0.447,1,1    S31.671,52,31.118,52z M26.266,52h-0.971c-0.553,0-1-0.447-1-1s0.447-1,1-1h0.971c0.553,0,1,0.447,1,1S26.818,52,26.266,52z     M21.412,52h-0.971c-0.553,0-1-0.447-1-1s0.447-1,1-1h0.971c0.553,0,1,0.447,1,1S21.965,52,21.412,52z M16.56,52h-0.971    c-0.553,0-1-0.447-1-1s0.447-1,1-1h0.971c0.553,0,1,0.447,1,1S17.112,52,16.56,52z M11.706,52h-0.971c-0.553,0-1-0.447-1-1    s0.447-1,1-1h0.971c0.553,0,1,0.447,1,1S12.259,52,11.706,52z M6.853,52H5.883c-0.553,0-1-0.447-1-1s0.447-1,1-1h0.971    c0.553,0,1,0.447,1,1S7.406,52,6.853,52z"/>		<path style="fill:#7383BF;" d="M2,52H1.5c-0.553,0-1-0.447-1-1v-0.5c0-0.553,0.447-1,1-1c0.405,0,0.755,0.241,0.912,0.588    C2.759,50.245,3,50.595,3,51C3,51.553,2.553,52,2,52z"/>		<path style="fill:#7383BF;" d="M1.5,47.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,47.053,2.053,47.5,1.5,47.5z M1.5,42.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,42.053,2.053,42.5,1.5,42.5z M1.5,37.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,37.053,2.053,37.5,1.5,37.5z M1.5,32.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,32.053,2.053,32.5,1.5,32.5z M1.5,27.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,27.053,2.053,27.5,1.5,27.5z M1.5,22.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,22.053,2.053,22.5,1.5,22.5z M1.5,17.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,17.053,2.053,17.5,1.5,17.5z M1.5,12.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,12.053,2.053,12.5,1.5,12.5z M1.5,7.5c-0.553,0-1-0.447-1-1v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v1    C2.5,7.053,2.053,7.5,1.5,7.5z"/>		<path style="fill:#7383BF;" d="M1.5,2.5c-0.553,0-1-0.447-1-1V1c0-0.553,0.447-1,1-1H2c0.553,0,1,0.447,1,1    c0,0.405-0.241,0.755-0.588,0.912C2.255,2.259,1.905,2.5,1.5,2.5z"/>		<path style="fill:#7383BF;" d="M47,2h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1S47.553,2,47,2z M42,2h-1    c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1S42.553,2,42,2z M37,2h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1    c0.553,0,1,0.447,1,1S37.553,2,37,2z M32,2h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1S32.553,2,32,2z M27,2h-1    c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1S27.553,2,27,2z M22,2h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1    c0.553,0,1,0.447,1,1S22.553,2,22,2z M17,2h-1c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1S17.553,2,17,2z M12,2h-1    c-0.553,0-1-0.447-1-1s0.447-1,1-1h1c0.553,0,1,0.447,1,1S12.553,2,12,2z M7,2H6C5.447,2,5,1.553,5,1s0.447-1,1-1h1    c0.553,0,1,0.447,1,1S7.553,2,7,2z"/>		<path style="fill:#7383BF;" d="M51.5,2.5c-0.405,0-0.755-0.241-0.912-0.588C50.241,1.755,50,1.405,50,1c0-0.553,0.447-1,1-1h0.5    c0.553,0,1,0.447,1,1v0.5C52.5,2.053,52.053,2.5,51.5,2.5z"/>		<path style="fill:#7383BF;" d="M51.5,26.639c-0.553,0-1-0.447-1-1v-0.966c0-0.553,0.447-1,1-1s1,0.447,1,1v0.966    C52.5,26.191,52.053,26.639,51.5,26.639z M51.5,21.811c-0.553,0-1-0.447-1-1v-0.965c0-0.553,0.447-1,1-1s1,0.447,1,1v0.965    C52.5,21.363,52.053,21.811,51.5,21.811z M51.5,16.983c-0.553,0-1-0.447-1-1v-0.966c0-0.553,0.447-1,1-1s1,0.447,1,1v0.966    C52.5,16.536,52.053,16.983,51.5,16.983z M51.5,12.155c-0.553,0-1-0.447-1-1V10.19c0-0.553,0.447-1,1-1s1,0.447,1,1v0.965    C52.5,11.708,52.053,12.155,51.5,12.155z M51.5,7.328c-0.553,0-1-0.447-1-1V5.362c0-0.553,0.447-1,1-1s1,0.447,1,1v0.966    C52.5,6.881,52.053,7.328,51.5,7.328z"/>		<path style="fill:#7383BF;" d="M51.5,31c-0.553,0-1-0.447-1-1v-0.5c0-0.553,0.447-1,1-1s1,0.447,1,1V30    C52.5,30.553,52.053,31,51.5,31z"/>	</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>'
	}
	let elements = [
	{
		tagName: 'div',
		args:{
			style: {position: 'fixed', top: '50vh', left: '16px', 'z-index': 9999, display: 'flex', 'flex-direction': 'column'},
			id:'dodlerBtnHolder',
			elements:[
			{
				tagName: 'button',
				args:{
					innerText: 'xxXxXxx',
					className: 'dodleBtn',
					onclick: ()=>{alert("xXxXxXXXxXxxxxXXx")}
				}
			},
			{
				tagName: 'button',
				args:{
					innerHTML: images.table,
					className: 'dodleBtn',
					onclick: ()=>{dodler.setAction('get-table')},
					data:{
						"btn-name": "get-table",
						"has-active": true
					}
				}
			},
			{
				tagName: 'button',
				args:{
					innerHTML: images.select,
					className: 'dodleBtn',
					onclick: ()=>{dodler.setAction('selection')},
					data:{
						"btn-name": "selection",
						"has-active": true
					}
				}
			},
			{
				tagName: 'button',
				args:{
					innerHTML: images.delete,
					className: 'dodleBtn',
					onclick: ()=>{
						dodler.setAction('delete')
						event.stopPropagation()
					},
					data:{
						"btn-name": "delete",
						"has-active": true
					}
				},
			},
			]
		},
	}
	];


	window.dodler = {
		btns: null,
		action: false,
		lastResult: null,
		start(conf){
			this._addStyleSheet();
			this.btns = conf.map(item => this._createElement(item.tagName, item.args, document.body));
			this._setListeners();
		},
		setAction(action){
			if(this.action === action){
				return;
			}
			this.action = action;
			Array.from(document.getElementsByClassName("dodleBtn"))
			.forEach(btn => {
				console.log(btn.data?.["has-active"])
				if(btn.data?.["has-active"]){
					btn.className = btn.data["btn-name"] === action
					? btn.className + ' doddleBtnActive'
					: btn.className.replace(" doddleBtnActive", "");
				}
			})

		},
		_createElement(tagName, args, parent){
			let el = document.createElement(tagName)
			Object.keys(args).forEach(key=>{
				if(key === 'style'){
					Object.keys(args.style).forEach(styleArg=>el.style[styleArg] = args.style[styleArg])
					return
				}
				if(key === 'data'){
					Object.keys(args.data).forEach(dataArg=>el.setAttribute(`data-${dataArg}`, args.data[dataArg]))
				}
				el[key] = args[key]
			})

			parent.appendChild(el)
			if(el.elements){
				el.elements.forEach(ch => {
					this._createElement(ch.tagName, ch.args, el)
				})
			}
			return el;
		},
		_addStyleSheet(){
			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = '.dodleBtn {padding: 4px 6px; font-weight. 700 } .doddleBtnActive{background-color: #7cb757}';
			document.getElementsByTagName('head')[0].appendChild(style);
		},
		_setListeners(){
			document.addEventListener('click', event=>{
				const classes = event.target?.className + event.target?.parentNode?.className + "";
				if(!this.action || classes.includes('dodleBtn')){
					return
				}
				if(this.action === 'delete'){
					event.target.remove();
					event.stopPropagation();
				}
				if(this.action === 'selection'){
					let sel = window.getSelection();
					console.log(sel.toString())
				}
				if(this.action === 'get-table'){
					let table = null;
					if(["TD", "TH"].includes(event.target.tagName)){
						table = event.target.parentNode.parentNode.parentNode
					}
					if(!table || table.tagName !== "TABLE"){
						console.log("<----[not table selected]---->")
						return
					}

                    let thead = Array.from(table.childNodes).find(node => node.tagName === "THEAD");
					let keys = Array.from(thead.childNodes[1].childNodes)
					.filter(node => ["TH","TD"].includes(node.tagName))
					.map(node => node.innerText);
					let tbody = Array.from(table.childNodes).find(node => node.tagName === "TBODY");
					let rows = Array.from(tbody.childNodes)
					.filter(node => node.tagName === "TR")
					.map(row=>{
						return Array.from(row.childNodes)
						.filter(node => ["TH","TD"].includes(node.tagName))
						.map(node => node.innerText)
						.reduce((obj, item, idx) => {
							obj[keys[idx]] = item;
							return obj;
						}, {})
					})

					this.lastResult = rows;
					console.log(rows)
				}
			})
		},
	}
	window.dodler.start(elements);
})();