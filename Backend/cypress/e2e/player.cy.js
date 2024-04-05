const apiURL = "http://localhost:3000/player/";
const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE3ZmM0MDQwLWYzMWUtMTFlZS04OTQwLTE3NWJhZmIyZGNiOCIsImlhdCI6MTcxMjMwMjIzNSwiZXhwIjoxNzEyMzA1ODM1fQ.dUuPbQ2mSijfbAAptaCUw82VhDz836ZFSMAyMXe75kU";

const player_name = "teszt";
const HP = 100;
const money = 100;
const world_name = "New World";
const objX = 0;
const objY = 0;
const blockX = 0;
const blockY = 0;

describe('Player test', () => {
  it('should GET player data and check it', () => {
    cy.request({
      method: 'GET',
      url: apiURL,
      headers: { Authorization: token }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('object').that.is.not.empty;
      expect(response.body.data['player_name']).to.equal(player_name);
      expect(response.body.data['HP']).to.equal(HP);
      expect(response.body.data['money']).to.equal(money);
      expect(response.body.data['world_name']).to.equal(world_name);
      expect(response.body.data['objX']).to.equal(objX);
      expect(response.body.data['objY']).to.equal(objY);
      expect(response.body.data['blockX']).to.equal(blockX);
      expect(response.body.data['blockY']).to.equal(blockY);
    });
  });
});
