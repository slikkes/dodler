(function(){
	let elements = [
	{
		tagName: 'div',
		args:{
			style: {position: 'fixed', top: '50vh', left: '16px', 'z-index': 999, display: 'flex', 'flex-direction': 'column'},
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
					innerText: 'ooOoOoo',
					className: 'dodleBtn',
					onclick: ()=>{alert("oOoOooOooOoooOOooOo")}
				}
			},
			{
				tagName: 'button',
				args:{
					innerText: 'no',
					className: 'dodleBtn',
					onclick: ()=>{dodler.action = false}
				}
			},
			{
				tagName: 'button',
				args:{
					innerText: 'yes',
					className: 'dodleBtn',
					onclick: ()=>{dodler.action = 'yes'}
				}
			},
			]
		},

	}
	]

	window.dodler = {
		btns: null,
		action: false,
		start(conf){
		this._addStyleSheet();
		this.btns = conf.map(item => this._createElement(item.tagName, item.args, document.body));
		this._setListeners();
	},
	_createElement(tagName, args, parent){
		let el = document.createElement(tagName)
		Object.keys(args).forEach(key=>{
			if(key === 'style'){
				Object.keys(args.style).forEach(styleArg=>el.style[styleArg] = args.style[styleArg])
				return
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
			style.innerHTML = '.dodleBtn {padding: 4px 6px; font-weight. 700 }';
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
