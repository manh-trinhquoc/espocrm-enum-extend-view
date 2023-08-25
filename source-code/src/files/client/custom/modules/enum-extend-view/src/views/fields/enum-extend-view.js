define('enum-extend-view:views/fields/enum-extend-view', ['views/fields/enum', 'views/fields/base', 'ui/multi-select', 'ui/select'], function (Dep, BaseView, MultiSelect, Select) {
    return Dep.extend({

        type: 'enum-extend-view',

        // listTemplate: 'enum-extend-view:fields/enum-extend-view/list',
        // listLinkTemplate: 'enum-extend-view:fields/enum-extend-view/list-link',
        // detailTemplate: 'enum-extend-view:fields/enum-extend-view/detail',
        editTemplate: 'enum-extend-view:fields/enum-extend-view/edit',
        // searchTemplate: 'enum-extend-view:fields/enum-extend-view/search',

        viewOption: null,

        setup: function () {
            Dep.prototype.setup.call(this);
            console.log('setup')
            console.log(this.params)
            this.viewOption = this.params.viewOption;
        },

        data: function () {
            let data = Dep.prototype.data.call(this);
            data.optionData = this.extractOptionData(data);
            return data;
        },

        afterRender: function () {
            BaseView.prototype.afterRender.call(this);
        },

        focusOnInlineEdit: function () {
            // Select.focus(this.$element);
        },

        fetch: function () {
            let value = this.$el.find('input[type="radio"]:checked').val();

            if (this.fetchEmptyValueAsNull && !value) {
                value = null;
            }

            let data = {};

            data[this.name] = value;

            return data;
        },

        setOptionList: function (optionList) {
            let currentValue = this.model.get(this.name);
            if (!optionList.includes(currentValue)) {
                optionList.unshift(currentValue);
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
