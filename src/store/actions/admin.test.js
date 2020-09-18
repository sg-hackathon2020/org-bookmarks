import * as actionTypes from './actionTypes';
import * as actions from './admin';
import expect from 'expect';

describe('actions', () => {
    it('should create an action to start the async call to get admin view', () => {
        const groupId = 1
        const expectedAction = {
            type: actionTypes.GROUP_ADMIN_VIEW_READ_START,
            groupId: groupId
        }
        expect(actions.getAdminViewStart(groupId)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('when the admin view is returned successfully from async call', () => {
        const group_admin_view = {}
        const expectedAction = {
            type: actionTypes.GROUP_ADMIN_VIEW_READ_SUCCESS,
            admin_view: group_admin_view
        }
        expect(actions.getAdminViewSuccess(group_admin_view)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('when the admin view get fails', () => {
        const error = 'no such exists!';
        const expectedAction = {
            type: actionTypes.GROUP_ADMIN_VIEW_READ_FAILURE,
            error: error
        }
        expect(actions.getAdminViewFailure(error)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('when the toggle action for group admin starts', () => {
        const groupId = 1;
        const userId = 1;
        const expectedAction = {
            type: actionTypes.GROUP_ADMIN_TOGGLE_START,
            groupId: groupId,
            userId: userId
        }
        expect(actions.toggleGroupAdminStart(groupId, userId)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('when the toggle action for group admin is successful', () => {
        const group_admin_view = {}
        const expectedAction = {
            type: actionTypes.GROUP_ADMIN_TOGGLE_SUCCESS,
            admin_view: group_admin_view
        }
        expect(actions.toggleGroupAdminSuccess(group_admin_view)).toEqual(expectedAction)
    });
});

describe('actions', () => {
    it('when the toggle action for group admin fails', () => {
        const error = 'does not exists';
        const expectedAction = {
            type: actionTypes.GROUP_ADMIN_TOGGLE_FAILURE,
            error: error
        }
        expect(actions.toggleGroupAdminFailure(error)).toEqual(expectedAction)
    });
});

/*

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
    afterEach(() => {
        fetchMock.restore()
    })
    it('creates GROUP_ADMIN_VIEW_READ_SUCCESS when fetching admin view has been done', () => {
        const groupId = 1;
        fetchMock.getOnce(`/api/v1/groups/${groupId}/admins`, {
            body: {todos: ['do something']},
            headers: {'content-type': 'application/json'}
        })
        const expectedActions = [
            {type: types.GROUP_ADMIN_VIEW_READ_START},
            {type: types.GROUP_ADMIN_VIEW_READ_SCCESS, body: {todos: ['do something']}}
        ]
        const store = mockStore({todos: []})

        return store.dispatch(actions.getAdminView(groupId)).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})*/
