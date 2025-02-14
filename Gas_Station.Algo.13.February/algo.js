// 134. Gas Station



// There are n gas stations along a circular route, where the amount of gas at the ith station is gas[i].

// You have a car with an unlimited gas tank and it costs cost[i] of gas to travel from the ith station to its next (i + 1)th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1. If there exists a solution, it is guaranteed to be unique.

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let totalGas = gas.reduce((a, b) => a + b, 0);
    let totalCost = cost.reduce((a, b) => a + b, 0);

    // If total gas is less than total cost, it's impossible to complete the circuit
    if (totalGas < totalCost) return -1;

    let currentGas = 0;
    let startIndex = 0;

    for (let i = 0; i < gas.length; i++) {
        currentGas += gas[i] - cost[i];
        
        // If current gas balance is negative, reset and try the next station as the starting point
        if (currentGas < 0) {
            startIndex = i + 1;
            currentGas = 0;
        }
    }

    return startIndex;
};
