import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import createparcelAction from '../../actions/createparcelAction';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore();
    });
    it('dispatch actions when create a parcel fails', () => {
        fetchMock.post(`https://stargal-dorothy.herokuapp.com/api/v1/parcels`,
            { body: { errors: {} } },

        );
        const store = mockStore({});
        store.dispatch(createparcelAction());
        expect(store.getActions()).toEqual([]);
    });

});

it('dispatch actions when craete a parcel is a success', () => {
    fetchMock.post(`https://stargal-dorothy.herokuapp.com/api/v1/parcels`,
        { body: {} },
    );
    const store = mockStore({});
    store.dispatch(createparcelAction()).then(() => {
        expect(store.
            getActions()).toEqual([{ type: 'CREATE_PARCEL_SUCCESS', payload: {} }]);



    });
});
