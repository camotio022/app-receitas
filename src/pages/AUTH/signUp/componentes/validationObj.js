export const validationRules = {
  email: [
    [(value) => value === '', 'Preencha o e-mail'],
    [(value) => value.indexOf('@') === -1, 'Falta um @'],
    [(value) => value.indexOf('.com') === -1, 'Falta o domínio'],
  ],
  lastName: [
    [(value) => value === '', 'Preencha o nome completo'],
    [(value) => value.length < 3, 'Falta um @'],
  ],
}

export const validation = ({ name, value, setFocos, setErrors }) => {
  let isValid = true
  const rules = validationRules[name]
  for (const ruleDefinition of rules) {
    const [rule, message] = ruleDefinition
    if (!rule(value)) {
      isValid = false
      setErrors((old) => ({ ...old, [name]: message }))
      break
    }
  }
}
