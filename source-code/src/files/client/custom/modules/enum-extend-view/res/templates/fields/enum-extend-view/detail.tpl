{{#if isNotEmpty}}

	{{#ifEqual viewOption 'kanban'}}
		<div class="enum-kanban">
			{{#each optionData}}
				<div class="label label-md label-{{ this.style }} triangle-right">
					{{#if this.isCurrent }}
						<input checked type="radio"/>
					{{else}}
						<input type="radio" disabled/>
					{{/if}}
					<span class="text-{{ this.style }}">{{ this.label  }}</span>
				</div>
			{{/each}}
		</div>
	{{else}}
		{{#if style}}
			<span class="{{class}}-{{style}}">
			{{/if}}
			{{valueTranslated}}
			{{#if style}}
			</span>
		{{/if}}

	{{/ifEqual}}


{{else}}
	{{#if valueIsSet}}
		<span class="none-value">{{translate 'None'}}</span>
	{{else}}
		<span class="loading-value">...</span>
	{{/if}}
{{/if}}
