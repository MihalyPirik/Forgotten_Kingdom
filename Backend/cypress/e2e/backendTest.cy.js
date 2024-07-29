const apiURL = 'http://localhost:3000/player/';
let token = '';

const player_name = 'teszt';
const HP = 100;
const money = 100;
const world_name = 'New World';
const objX = 0;
const objY = 0;
const blockX = 0;
const blockY = 0;

describe('Player test', () => {
  it('should player registration data and check it', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/user/registration',
      body: {
        name: 'teszt1',
        email: 'teszt@teszt1.hu',
        password: '123456789'
      }
    }).then((response) => {
      expect(response.status).to.equal(201);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('object').that.is.not.empty;
      expect(response.body.data.message).to.equal('Sikeres regisztráció!');
    });
  });

  it('should player login data and check it', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/user/login',
      body: {
        email: 'teszt@teszt1.hu',
        password: '123456789'
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('object').that.is.not.empty;
      expect(response.body.data.message).to.equal('Sikeres bejelentkezés!');

      token = response.headers.authorization;
    });
  });

  it('should PUT player data and check it', () => {
    cy.request({
      method: 'PUT',
      url: apiURL,
      headers: { Authorization: token },
      body: {
        player_name: 'teszt',
        HP: 100,
        money: 100,
        world_name: 'New World',
        objX: 0,
        objY: 0,
        blockX: 0,
        blockY: 0
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('object').that.is.not.empty;
      expect(response.body.data.message).to.equal('Sikeres módosítás!');
    });
  });

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
      expect(response.body.data['ToolTypes']).to.be.an('array');
      expect(response.body.data['Items']).to.be.an('array');
      expect(response.body.data['Markets']).to.be.an('array');
      expect(response.body.data['QuestStats']).to.be.an('array');
    });
  });

  it('should DELETE player data and check it', () => {
    cy.request({
      method: 'DELETE',
      url: apiURL,
      headers: { Authorization: token }
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('data');
      expect(response.body.data).to.be.an('object').that.is.not.empty;
      expect(response.body.data.message).to.equal('Sikeres törlés!');
    });
  });
});
