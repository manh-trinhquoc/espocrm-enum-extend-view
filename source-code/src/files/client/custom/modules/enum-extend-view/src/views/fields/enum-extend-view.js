define('enum-extend-view:views/fields/enum-extend-view', ['views/fields/enum', 'views/fields/base', 'ui/multi-select', 'ui/select'], function (Dep, BaseView, MultiSelect, Select) {
    return Dep.extend({
        editTemplate: 'enum-extend-view:fields/enum-extend-view/edit',

        data: function () {
            let data = Dep.prototype.data.call(this);
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
    });
});
