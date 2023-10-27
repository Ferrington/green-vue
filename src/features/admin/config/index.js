import {
  BASE_URL,
  createRecord,
  deleteRecord,
  getAllRecords,
  getRoles,
  patchRecord
} from '@admin/requests'

export const tableConfigs = {
  user: {
    NAME: 'User',
    COLUMNS: [
      {
        name: 'id',
        type: 'number',
        editable: false
      },
      {
        name: 'username',
        type: 'string',
        editable: true,
        required: true
      },
      {
        name: 'setPasswordUrl',
        type: 'string',
        editable: false,
        readOnly: true,
        modifyValue: (value) => `${BASE_URL}/user/changePassword?u=${value}`
      },
      {
        name: 'roles',
        type: 'list',
        editable: true,
        getData: getRoles,
        multiple: true,
        required: true
      }
    ],
    REQUESTS: {
      read: () => getAllRecords('user'),
      create: (data) => createRecord('user', data),
      update: (data) => patchRecord('user', data),
      delete: (id) => deleteRecord('user', id)
    }
  }
}
