{{#each params.options}}
	<p>
		{{#ifEqual this ../value}}
			<input checked type="radio" id="{{ ../viewObject.cid }}-{{ @key }}" data-name="{{ ../name }}" name="{{ ../viewObject.cid }}-{{ ../name }}" value="{{this}}"/>
		{{else}}
			<input type="radio" id="{{ ../viewObject.cid }}-{{ @key }}" data-name="{{ ../name }}" name="{{ ../viewObject.cid }}-{{ ../name }}" value="{{this}}"/>
		{{/ifEqual}}
		<label for="{{ ../viewObject.cid }}-{{ @key }}">{{prop  ../translatedOptions this }}</label>
	</p>
{{/each}}
