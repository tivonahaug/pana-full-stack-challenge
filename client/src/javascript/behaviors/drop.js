const Drop = require('tether-drop');

const DropBehavior = Marionette.Behavior.extend({
  onRender: function() {
    var behavior, dropdowns;
    behavior = this;
    dropdowns = [];
    this.$el.find('.js-dropdown-toggle').each(function() {
      var $content, $menu, $toggle, dropdown, shouldAutoclose;
      $toggle = $(this);
      $menu = $toggle.next('.js-dropdown-menu');
      shouldAutoclose = $menu.data('dropdown-autoclose') !== false;
      if ($menu[0]) {
        dropdown = new Drop({
          position: $toggle.data('drop-position') || 'bottom right',
          target: $toggle[0],
          content: $menu[0],
          remove: true,
          openOn: 'click',
          classes: $toggle.data('drop-class'),
        });
        $content = $(dropdown.content);
        dropdown.on('open', function() {
          behavior.view.triggerMethod('dropdown:opened', $content);
          return $content.find('.js-dropdown-action').on('click', function(e) {
            e.stopPropagation();
            behavior.view.triggerMethod('dropdown:action:clicked', $(this));
            if (shouldAutoclose) {
              return dropdown.close();
            }
          });
        });
        dropdown.on('close', function() {
          behavior.view.triggerMethod('dropdown:closed', $content);
          return $content.find('.js-dropdown-action').off('click');
        });
        return dropdowns.push(dropdown);
      }
    });
    this.view.dropdowns = dropdowns;
    return behavior.view.triggerMethod('dropdowns:rendered');
  },
});

window.onclick = function(e) {
  if (!$(e.target).hasClass('dropdown-toggle')) {
    return $('.dropdown ul').hide();
  }
};

export default DropBehavior;
