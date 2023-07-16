import { classNames } from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('test with 1 class', () => {
        expect(classNames('first')).toBe('first');
    });

    test('test additional classes', () => {
        expect(
            classNames('first', {}, ['name', 'second']),
        ).toBe('first name second');
    });

    test('test mods classes', () => {
        expect(classNames('first', { hovered: true, selected: true }))
            .toBe('first hovered selected');
    });

    test('test mods false classes', () => {
        expect(classNames('first', { hovered: false, selected: true }))
            .toBe('first selected');
    });

    test('test mods undefined classes', () => {
        expect(classNames('first', { hovered: undefined, selected: true }))
            .toBe('first selected');
    });

    test('test with all params', () => {
        expect(classNames(
            'first',
            { hovered: false, selected: true },
            ['name', 'second'],
        ))
            .toBe('first selected name second');
    });
});
