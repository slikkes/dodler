(function(){
	let elements = [
	{
		tagName: 'button',
		args:{
			innerText: 'xxXxXxx',
			className: 'dodleBtn',
			style:{top: '50vh'},
			onclick: ()=>{alert("xXxXxXXXxXxxxxXXx")}
		}
	},
	{
		tagName: 'button',
		args:{
			innerText: 'ooOoOoo',
			className: 'dodleBtn',
			style:{top: '40vh'},
			onclick: ()=>{alert("oOoOooOooOoooOOooOo")}
		}
	},
	{
		tagName: 'button',
		args:{
			innerText: 'no',
			className: 'dodleBtn',
			style:{top: '30vh'},
			onclick: ()=>{dodler.action = false}
		}
	},
	{
		tagName: 'button',
		args:{
			innerText: 'yes',
			className: 'dodleBtn',
			style:{top: '20vh'},
			onclick: ()=>{dodler.action = 'yes'}
		}
	},
	]

	window.dodler = {
		btns: null,
		action: false,
		start(conf){
			this._addStyleSheet();
			this.btns = conf.map(item => this._createElement(item.tagName, item.args));
			this._setListeners();
		},
		_createElement(tagName, args){
			let el = document.createElement(tagName)
			Object.keys(args).forEach(key=>{
				if(key === 'style'){
					Object.keys(args.style).forEach(styleArg=>el.style[styleArg] = args.style[styleArg])
					return
				}
				el[key] = args[key]
			})
			document.body.appendChild(el)
			return el;
		},
		_addStyleSheet(){
			var style = document.createElement('style');
			style.type = 'text/css';
			style.innerHTML = '.dodleBtn {position: fixed; left: 8px; top: 40vh; z-index: 999; }';
			document.getElementsByTagName('head')[0].appendChild(style);
		},
		_setListeners(){
			document.addEventListener('click', event=>{
				if(!dodler.action){
					return
				}
				console.log(event.target)
			})
		}
	}
	window.dodler.start(elements);
}())
