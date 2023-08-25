define('enum-extend-view:views/fields/enum-extend-view', ['views/fields/enum', 'views/fields/base', 'ui/multi-select', 'ui/select'], function (Dep, BaseView, MultiSelect, Select) {
    return Dep.extend({

        type: 'enum-extend-view',

        detailTemplate: 'enum-extend-view:fields/enum-extend-view/detail',
        editTemplate: 'enum-extend-view:fields/enum-extend-view/edit',

        viewOption: null,

        setup: function () {
            Dep.prototype.setup.call(this);
            this.viewOption = this.params.viewOption ? this.params.viewOption : 'dropdown';
        },

        data: function () {
            let data = Dep.prototype.data.call(this);
            data.optionData = this.extractOptionData(data);
            data.viewOption = this.viewOption;
            return data;
        },

        afterRender: function () {
            BaseView.prototype.afterRender.call(this);
        },

        focusOnInlineEdit: function () {
            if (this.viewOption == 'dropdown') {
                Dep.prototype.focusOnInlineEdit.call(this);
            }
        },

        fetch: function () {
            if (this.viewOption == 'dropdown') {
                return Dep.prototype.fetch.call(this);
            }

            let value = this.$el.find('input[type="radio"]:checked').val();

            if (this.fetchEmptyValueAsNull && !value) {
                value = null;
            }

            let data = {};

            data[this.name] = value;

            return data;
        },

        setOptionList: function (optionList) {
            if (this.viewOption !== 'dropdown') {
                let currentValue = this.model.get(this.name);
                if (!optionList.includes(currentValue)) {
                    optionList.unshift(currentValue);
                }
            }
            Dep.prototype.setOptionList.call(this, optionList);
        },

        extractOptionData: function (data) {
            // console.log('data', data)
            if (!Array.isArray(data.params.options)) {
                return [];
            }
            let optionData = data.params.options.map(function (value) {
                return {
                    value: value,
                    label: data.translatedOptions[value] || value,
                    isCurrent: value === data.value,
                    style: data.params.style[value] || "default",
                }
            });

            // console.log('optionData', optionData)
            return optionData;
        },
    });
});
