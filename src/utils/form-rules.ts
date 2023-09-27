export const formRules = {
  required: {
    value: true,
    message: 'Field ini Harus diisi',
  },
  email: {
    value: /\S+@\S+\.\S+/,
    message: 'Field ini harus berformat email',
  },
  minNominal: (number: number) => ({
    value: number,
    message: 'Harus lebih besar dari ' + number,
  }),
  url: {
    value:
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
    message: 'Harus format url',
  },
}

export function getVariant(dirty: boolean, error: boolean) {
  if (error) {
    return 'danger'
  }
  return !dirty ? 'default' : 'success'
}
