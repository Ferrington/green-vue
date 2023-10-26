import { BASE_URL, getRoles } from '@admin/requests'

export const tableConfigs = {
  user: {
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
    ]
  }
}
