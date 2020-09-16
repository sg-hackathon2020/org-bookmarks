import * as actionTypes from './actionTypes';
import * as actions from './admin';

describe('actions', () => {
    it('should create an action to add a todo', () => {
        const groupId = 1
        const expectedAction = {
            type: actionTypes.GROUP_ADMIN_VIEW_READ_START,
            groupId: groupId
        }
        expect(actions.getAdminViewStart(groupId)).toEqual(expectedAction)
    })
})