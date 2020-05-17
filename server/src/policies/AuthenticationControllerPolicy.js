const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = {
      email: Joi.string().email(),
      password: Joi.string().regex(
        new RegExp('^[a-zA-Z0-9]{8,32}$')
      )
    }

    const {error, value} = Joi.validate(req.body, schema)
    
    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: `You must provide a valid email account`
          })
          break
        case 'password':
          res.status(400).send({
            error: `The password provided failed to match following rules
              <br/>
              1. It must contain ONLY following characters: lower case, upper case, numeric.
              <br/>
              2. Must be at lest 8 characters and not more than 32 characters.
            `
          })
          break
        default: 
          res.status(400).send({ 
            error: `Invalid registration information`
          })
      }
    } else {
      next() 
    }
  }
}