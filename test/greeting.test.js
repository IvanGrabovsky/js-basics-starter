import { describe, it, expect } from 'vitest';
import { greetUser, getCourseInfo } from '../src/greeting.js';

describe('1. Завдання: greetUser', () => {
  it('має повертати персоніфіковане привітання для імені Олексій', () => {
    expect(greetUser('Олексій')).toBe('Привіт, Олексій! Вітаємо у Frontend Camp.');
  });

  it('має коректно працювати з іншим імʼям (Анна)', () => {
    expect(greetUser('Анна')).toBe('Привіт, Анна! Вітаємо у Frontend Camp.');
  });

  it('має повертати рядок', () => {
    expect(typeof greetUser('Test')).toBe('string');
  });
});

describe('2. Завдання: getCourseInfo', () => {
  it('повинен повертати обʼєкт із правильними полями', () => {
    const info = getCourseInfo();
    expect(info).not.toBeNull();
    expect(typeof info).toBe('object');
    expect(info.title).toBe('Frontend Learning Hub');
    expect(info.year).toBe(2026);
    expect(info.lessonsCount).toBe(11);
  });
});
