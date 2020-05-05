import { clickable, collection, create, isPresent, text, visitable } from 'ember-cli-page-object';

import error from 'nomad-ui/tests/pages/components/error';
import pageSizeSelect from 'nomad-ui/tests/pages/components/page-size-select';

export default create({
  pageSize: 25,

  visit: visitable('/csi/plugins'),

  plugins: collection('[data-test-plugin-row]', {
    id: text('[data-test-plugin-id]'),
    controllerHealth: text('[data-test-plugin-controller-health]'),
    nodeHealth: text('[data-test-plugin-node-health]'),
    provider: text('[data-test-plugin-provider]'),
  }),

  nextPage: clickable('[data-test-pager="next"]'),
  prevPage: clickable('[data-test-pager="prev"]'),

  isEmpty: isPresent('[data-test-empty-plugins-list]'),
  emptyState: {
    headline: text('[data-test-empty-plugins-list-headline]'),
  },

  error: error(),
  pageSizeSelect: pageSizeSelect(),
});
