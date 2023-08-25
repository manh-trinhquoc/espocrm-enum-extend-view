{{#each optionData}}
	<p>
		{{#if this.isCurrent }}
			<input checked type="radio" id="{{ ../viewObject.cid }}-{{ @key }}" data-name="{{ ../name }}" name="{{ ../viewObject.cid }}-{{ ../name }}" value="{{this.value}}"/>
		{{else}}
			<input type="radio" id="{{ ../viewObject.cid }}-{{ @key }}" data-name="{{ ../name }}" name="{{ ../viewObject.cid }}-{{ ../name }}" value="{{this.value}}"/>
		{{/if}}
		<label for="{{ ../viewObject.cid }}-{{ @key }}">
			<span class="text-{{ this.style }}">{{ this.label  }}</span>
		</label>
	</p>
{{/each}}