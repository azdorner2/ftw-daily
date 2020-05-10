import { types as sdkTypes } from './util/sdkLoader';

const { LatLng, LatLngBounds } = sdkTypes;

// An array of locations to show in the LocationAutocompleteInput when
// the input is in focus but the user hasn't typed in any search yet.
//
// Each item in the array should be an object with a unique `id` (String) and a
// `predictionPlace` (util.types.place) properties.
export default [
  {
    id: 'default-Phoenix',
    predictionPlace: {
      address: 'Phoenix, Arizona',
      bounds: new LatLngBounds(new LatLng(34.17740306, -111.35809073), new LatLng(32.73274351, -112.76486858)),
    },
  },
];
