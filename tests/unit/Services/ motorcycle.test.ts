import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import MotorcyclesService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

const inputArray = [
  {
    id: '644ae5a138761dc44bcacf45',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    engineCapacity: 600,
    category: 'Street',
  },
  {
    id: '644ae5b238761dc44bcacf4a',
    model: 'Honda Cb 600f Hornet',
    year: 2005,
    color: 'Yellow',
    status: true,
    buyValue: 30,
    engineCapacity: 600,
    category: 'Street',
  },
];

describe('it should test all motorcyclesService functions', function () {
  it('it should list all motorcycles', async function () {
    // Arrange
    const motorcycleOutPut = inputArray.map((item) => new Motorcycle(
      {
        model: item.model,
        year: item.year,
        color: item.color, 
        status: item.status, 
        buyValue: item.buyValue, 
        category: item.category,
        engineCapacity: item.engineCapacity,
      },
    ));
    
    sinon.stub(Model, 'find').resolves(motorcycleOutPut);

    // Act
    const service = new MotorcyclesService();
    const result = await service.find();

    // Assert
    expect(result).to.be.deep.equal(motorcycleOutPut);

    sinon.restore();
  });

  it('should list one motorcycle with a specific id', async function () {
    // Arrange
    const motorcycleOutput = new Motorcycle(inputArray[0]);
    
    sinon.stub(Model, 'findById').resolves(motorcycleOutput);

    // Act
    const service = new MotorcyclesService();
    const result = await service.findById('644ae5a138761dc44bcacf45');

    // Assert
    expect(result).to.be.deep.equal({ data: motorcycleOutput, status: 200 });

    sinon.restore();
  });

  it('should create a motorcycle', async function () {
    // Arrange
    const motorcycleOutput = new Motorcycle(inputArray[0]);
    
    sinon.stub(Model, 'create').resolves(motorcycleOutput);

    // Act
    const service = new MotorcyclesService();
    const result = await service.create(inputArray[0]);

    // Assert
    expect(result).to.be.deep.equal({
      buyValue: 30,
      category: 'Street',
      color: 'Yellow',
      engineCapacity: 600,
      id: '644ae5a138761dc44bcacf45',
      model: inputArray[0].model,
      status: true,
      year: 2005,
    });

    sinon.restore();
  });
});
