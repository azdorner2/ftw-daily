/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'helmets',
    label: 'Helmets',
  },
  {
    key: 'fuel',
    label: 'Fuel',
  },
  {
    key: 'life_vests',
    label: 'Life Vests',
  },
  {
    key: 'water_toys',
    label: 'Water Toys',
  },
  {
    key: 'jacuzzi',
    label: 'Jacuzzi',
  },
  {
    key: 'audiovisual_entertainment',
    label: 'Audiovisual entertainment',
  },
  {
    key: 'barbeque',
    label: 'Barbeque',
  },
  {
    key: 'own_food_allowed',
    label: 'Own food allowed',
  },
];

export const categories = [
  { key: 'offroad', label: 'Off-Road' },
  { key: 'electric', label: 'Camping' },
  { key: 'water', label: 'Water' },
  { key: 'other', label: 'Other' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 2000,
  step: 10,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};

// Activate keyword filter on search page

// NOTE: If you are ordering search results by distance the keyword search can't be used at the same time.
// You can turn off ordering by distance in config.js file
export const keywordFilterConfig = {
  active: true,
};

export const sortConfig = {
  // Enable/disable the sorting control in the SearchPage
  active: true,

  // Internal key for the relevance option, see notes below.
  relevanceKey: 'relevance',

  options: [
    { key: 'createdAt', label: 'Newest' },
    { key: '-createdAt', label: 'Oldest' },
    { key: '-price', label: 'Lowest price' },
    { key: 'price', label: 'Highest price' },

    // The relevance is only used for keyword search, but the
    // parameter isn't sent to the Marketplace API. The key is purely
    // for handling the internal state of the sorting dropdown.
    { key: 'relevance', label: 'Relevance', longLabel: 'Relevance (Keyword search)' },
  ],
};
