const chai = require('chai')
const chaiHttp = require('chai-http')
const app = require('../index')

// Configure chai
chai.use(chaiHttp)
chai.should()

describe('Make sure Server is Running', () => {
    it('should return a page with status 200', (done) => {
        chai.request(app)
          .get('/')
          .end((err, res) => {
            res.should.have.status(200)
            // res.body.should.be.a('object')
            done()
          })
      })
})
