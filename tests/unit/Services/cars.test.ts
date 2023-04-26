import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import Car from '../../../src/Domains/Car';
import CarsService from '../../../src/Services/CarsService';

const inputArray = [
  {
    id: '644989181b48cdab59bc6627',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: false,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
  {
    id: '644989191b48cdab59bc6629',
    model: 'Marea',
    year: 2002,
    color: 'Black',
    status: false,
    buyValue: 15.99,
    doorsQty: 4,
    seatsQty: 5,
  },
];

describe('it should test all carsService functions', function () {
  it('it should list all cars', async function () {
    // Arrange
    const carOutput = inputArray.map((item) => new Car(
      {
        model: item.model,
        year: item.year,
        color: item.color, 
        status: item.status, 
        buyValue: item.buyValue, 
        doorsQty: item.doorsQty, 
        seatsQty: item.seatsQty,
      },
    ));
    
    sinon.stub(Model, 'find').resolves(carOutput);

    // Act
    const service = new CarsService();
    const result = await service.find();

    // Assert
    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });

  it('should list one car with a specific id', async function () {
    // Arrange
    const carOutput = new Car(inputArray[0]);
    
    sinon.stub(Model, 'findById').resolves(carOutput);

    // Act
    const service = new CarsService();
    const result = await service.findById('644989181b48cdab59bc6627');

    // Assert
    expect(result).to.be.deep.equal({ data: carOutput, status: 200 });

    sinon.restore();
  });
});