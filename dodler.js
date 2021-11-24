(function(){
	let images={
		delete:'<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAB7klEQVR4nO3azWoUQRTF8V+MEHWVrPxA3Qi+g4K+ki4EUVz6AC59EsG1C12IulXjwqgkI4KIaEhkEhc9AQmSmXZuVarN/UMzvag+dfvMqeqvIkmSJEmS5IiyUKmfc7iHazg1pe0PPMF9rBeuqwpn8QG7Pbc1nCld3PHSHeAuzk/2X+vMOIiLuIwLuIMb5UqrwwvdP7qKxRnaL+Ld5JjnBesCx0p3gKXJ72eMZ2g/xmiyf7JIRX9Qw4D/hhW80n8yq729xHIJA642cHKzbldmPak+V4GnuI1LPY45DFbx7LCLSJIkGQQRT4NLuBmg8y88wNY8AhEGLOgeYYvftu7jF05gZx6RiFvhXXwM0OnLyJwnT9yzwFqQTh82IkSGbEDI26IhG9BUAqa95SlBJiBCZMgJaMqAIz8J/sSXIK1ZaSoB1E/BaHqT6QzVgK/YjBCKNKDmRBj2yWyoBoSMf4Y7BJpMQE0DjnwCmjRgHduBetP6CiHSgB18CtQ7iCYTQL0rQZMJoN480GwCahiwpbsTDGGIQ2BD9yI2hCEmIHTl2BANCBv/xBvwPljvbzSdgO/4Fqy5n6YTQLfErSShKSthwOMCmnuMC+uHsIw3yix+uhVdbKnF0iu6BVXXcXpOrW28xUM8mlMrSZIkSZIk2eM36l3Q3idu5RgAAAAASUVORK5CYII=" style="width: 16px; height: 16px"/>'
	}
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
					innerHTML: images.delete,
					className: 'dodleBtn',
					style:{backgroundColor: '#7cb757'},
					onclick: ()=>{
						if(dodler.action === 'delete'){
							document.getElementsByClassName('dodleBtn')[3].style.backgroundColor = "#7cb757"
							dodler.action =  false ;
						}else{
							document.getElementsByClassName('dodleBtn')[3].style.backgroundColor = "#ff4545"
							dodler.action =  'delete'
						}
						event.stopPropagation()
					}
				}
			},
			]
		},

	}
	];


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
				if(!this.action){
					return
				}
				if(this.action === 'delete'){
					if(!['dodleBtn'].includes(event.target.className)){
						event.target.remove();
						event.stopPropagation();
					}
				}
				console.log(event.target)
			})
		},
	}
	window.dodler.start(elements);
}())
