{{#ifEqual viewOption 'dropdown' }}
	<select data-name="{{name}}" class="form-control main-element">
		{{options
            params.options value
            scope=scope
            field=name
            translatedOptions=translatedOptions
            includeMissingOption=true
            styleMap=params.style
        }}
	</select>
{{/ifEqual}}

{{#ifEqual viewOption 'radio'}}
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
{{/ifEqual}}

{{#ifEqual viewOption 'kanban'}}
	<div class="enum-kanban">
		{{#each optionData}}
			<div class="label label-md label-{{ this.style }} triangle-right">
				{{#if this.isCurrent }}
					<input checked type="radio" id="{{ ../viewObject.cid }}-{{ @key }}" data-name="{{ ../name }}" name="{{ ../viewObject.cid }}-{{ ../name }}" value="{{this.value}}"/>
				{{else}}
					<input type="radio" id="{{ ../viewObject.cid }}-{{ @key }}" data-name="{{ ../name }}" name="{{ ../viewObject.cid }}-{{ ../name }}" value="{{this.value}}"/>
				{{/if}}
				<label for="{{ ../viewObject.cid }}-{{ @key }}">
					<span class="text-{{ this.style }}">{{ this.label  }}</span>
				</label>
			</div>
		{{/each}}
	</div>

{{/ifEqual}}
