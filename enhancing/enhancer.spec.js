const enhancer = require('./enhancer.js');
// test away!

describe('enhancer', () => {
    const sword = {
        name: "iron sword",
        enhancement: 0,
        durability: 50
    }

    const staff = {
        name: 'staff of fire',
        enhancement: 19,
        durability: 30
    }

    const bow = {
        name: 'bow of life',
        enhancement: 15,
        durability: 100
    }

    describe('repair', () => {
        test('should bring item durability to 100', () => {
            enhancer.repair(sword);
            enhancer.repair(staff)
            expect(sword.durability).toBe(100);
            expect(staff.durability).toBe(100);
        });
    });

    describe('success', () => {
        test('should bring item enhancement up by 1 if not already at 20', () => {
            enhancer.succeed(staff);
            enhancer.succeed(staff);
            enhancer.succeed(sword);

            expect(sword.enhancement).toBe(1);
            expect(staff.enhancement).toBe(20);
        });
    });

    describe('failed e > 16', () => {
        test('should reduce item enhancement by 1 and dura by 10 if enhancement > 16', () => {
            enhancer.fail(staff);

            expect(staff.durability).toBe(90);
            expect(staff.enhancement).toBe(19);
        });
    });

    describe('failed e > 15', () => {
        test('should reduce item durability by 10 if enh > 15', () => {
            enhancer.fail(bow);

            expect(bow.durability).toBe(90);
            expect(bow.enhancement).toBe(15);
        });
    });

    describe('failed e < 15', () => {
        test('should reduce item durability by 5 if enh < 15', () => {
            enhancer.fail(sword);

            expect(sword.durability).toBe(95);
            expect(sword.enhancement).toBe(1);
        });
    });
});