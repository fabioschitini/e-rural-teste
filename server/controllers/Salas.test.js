const request=require('supertest')
const app=require('../app') 
var Salas= require('../models/salas');




it('POST /salas,add new game object on the allGames array,then return array with object with all games',async()=>{
    const response=await request(app)
    .post('/salas')
    .send({
        name:'sala teste'
    })
    .expect("Content-Type",/json/)
    .expect(200)
 expect(response.body).toEqual(
        expect.objectContaining({ 
            name:'sala teste'
        })
 )
})

it('GET /games return array with object with all salas',async()=>{
    const response=await request(app)
    .get('/salas')
    .expect("Content-Type",/json/)
    .expect(200)
 expect(response.body).toEqual(
    expect.arrayContaining([
        expect.objectContaining({
            name:expect.any(String)
        })
    ])
 )
})

it('DELETE /game, delete especified game',async()=>{
    const sala=await Salas.find({name:'sala teste'})
    salaId=sala[0]._id
    const response=await request(app)
    .delete(`/salas/${salaId}`)
    .expect("Content-Type",/json/)
    .expect(200)
 expect(response.body).not.toEqual( expect.arrayContaining([
    expect.objectContaining({
        name:'sala teste'
    })
]))
}) 