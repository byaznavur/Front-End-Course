// DARSDA KO’RILADIGAN MASALALAR
// let π = 3.14;
// let R = 10;
// let a = 3,
//   b = 4;
// x = 12;

//! Begin1. Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
// let L = 2 * π * R;
// let S = (π * R) ** 2;
// console.log(L, S);

//! Begin2. Ikkita manfiy bo`lmagan son a va b berilgan. Ularning o`rta geometrigi G aniqlansin. G = (a * b) ** (1/2)
// let G = (a * b) ** (1 / 2);
// console.log(G);

//! Begin3. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
// let y = 3 * x ** 6 - 6 * x ** 2 - 7;
// console.log(y);

//! Begin4. X kg konfet A so`m turadi. 1 kg va Y kg konfet qancha turishini aniqlovchi programma tuzilsin.
// let X = 12;
// let A = 120000;
// let Y = 8;
// let kg1 = A / X;
// let kgY = kg1 * Y;

// console.log(kg1, kgY);

//! Begin5. Berilgan A va B sonlarining qiymatlarini almashtiring. A va B ning yangi qiymati ekranga chiqarilsin.
// let A = 12;
// let B = 10;

// let K = A;
// A = B;
// B = K;

// console.log(A, B);

//! Integer1. Ikki xonali son berilgan. Oldin uning o'nliklar xonasidagi raqamini, so`ng birlar xonasidagi raqamini hamda ularning yig’indisini chiqaruvchi programma tuzilsin.
// let ab = 21;
// let k = ab % 10;
// let y = (ab - k) / 10;

// console.log(k, y);

//! Integer2. Ikki xonali son berilgan. Uning raqamlari o'rnini almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// let ab = 21;
// let k = ab % 10;
// let y = (ab - k) / 10;
// let res = k * 10 + y;
// console.log(res);

//! Integer3. Uch xonali son berilgan. Uning yuzlar xonasidagi raqamini aniqlovchi programma tuzilsin.

// ﻿Integer4. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib, berilgan sonni yuzliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 1239
// Output: 2
// let num = 234312;

// let mix = ((num - (num % 100)) / 100) % 10;

// console.log(mix);

//! Integer5. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat, minut va sekund o'tganini aniqlovchi programma tuzilsin.

// let n = 11400;
// let t = n % 3600;
// sekund = t % 60;
// let minut = (t - sekund) / 60;
// let hour = (n - t) / 3600;

// console.log(hour, minut, sekund);

// UYGA VAZIFA

//! Begin1. To`g`ri to`rtburchakning tomonlari a va b berilgan. Uning yuzasi va perimetri aniqlansin.
// let S = a * b;
// let P = 2 * (a + b);
// console.log(S, P);

//! Begin2. Aylananing diametri d berilgan. Uning uzunligi va yuzasi aniqlansin.
// let L = π * 2 * R;
// let r = R;
// let S = (π * r) ** 2;

// console.log(S, L);

//! Begin3. Kubning yon tomoni a berilgan. Uning hajmini V va to`la sirti S aniqlansin.
// let V = a ** 3;
// let S = 6 * a ** 2;

// console.log(S, V);

//! Begin4. Paralelepepidning tomonlari a, b, c berilgan. Uning hajmi Vni va to'la sirti Sni aniqlansin.
// let V = a * b * c
// let S = 2 * (a * b + b * c + a * c)

//! Begin5. Ikkita son a va b berilgan. Ularning o`rta arifmetigi M aniqlansin.
// let M = (a + b) / 2

//! Begin6. To`gri uchburchakning katetlari a va b berilgan. Uning gipotenuzasi c va perimetri P aniqlansin.
// let c = (a ** 2 + b ** 2) ** (1 / 2);
// let P = a + b + c;

//! Begin7. Umumiy markazga bo`lgan ikkita aylana radiusi berilgan. r1, r2. (r1 > r2). Ularning yuzalari S1 va S2, ularning ayirmasi S aniqlansin.
// let r1 = 12,
//   r2 = 12;
// let S1 = π * r1;
// let S2 = π * r2;
// let S = π * (r1 ** 2 - r2 ** 2);

//! Begin8. Aylananing uzunligi L berilgan. Uning radiusi R va yuzasi S aniqlansin.
// let L = 2 * π * R;
// let S = π * R ** 2;

//! Begin9. Tekislikdagi berilgan ikki nuqta (x1, y1) va (x2, y2) orasidagi L masofa topilsin.
// let L = (x1-x2)**2 + (y1 - y2)**2

//! Begin10. A, B va C sonlari berilgan. A ni qiymati B ga, B ni qiymati C ga va C ni qiymati A ga almashtirilsin. A, B va C ning yangi qiymatilari ekranga chiqarilsin.
// let A = 12,
//   B = 13,
//   C = 14;

// let D = A;
// let F = B;
// let S = C;

// B = D;
// C = F;
// A = S;

//! Begin11. x ning qiymati berilganda y funksiyaning qiymati aniqlansin.
// let y = 4 * (x - 3) ** 6 - 7 * (x - 3) ** 3 + 2;

//! Begin12. A soni berilgan. A ning darajalarini aniqlovchi programma tuzilsin.
// A**3‚ A**6‚ A**9, A**15

//! Begin13. Temperatura Tf (farengeyt) da berilgan. Temperatura qiymatini Tc (gradus selsiy) ga o`tkazuvchi programma tuzilsin.
// let Tc = ((Tf - 32) * 5) / 9;

//! Begin14. X kg shokolad A so`m turadi va Y kg konfet B so`m turadi. 1 kg shokolad 1 kg konfetdan qancha qimmat turishini aniqlovchi programma tuzilsin.

// let kg1 = A / X;
// let kg2 = B / Y;

// let res = kg1 / kg2;

//! Begin15. Abdulaziz X kg olmani A so’mdan, Y kg olmani B so’mdan sotib oldi. Abdulaziz jami qancha savdo qilgan?

// let sum = X * A + Y * B;
// Keyingi misollarda xonalarni qanday atalishini bilish muhim !

// 5
// 7
// 0
// 1
// 3
// 9
// Yuz minglar xonasi
// O’n minglar xonasi
// Minglar xonasi
// Yuzlar xonasi
// O’nlar xonasi
// Birlar xonasi

//! Integer1. Uch xonali son berilgan. Oldin uni birliklar xonasidagi raqamni so`ng o`nliklar xonasidagi raqamni chiqaruvchi programma tuzilsin.
// let abc = 123;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;
// console.log(a, b, c);

//! Integer2. Uch xonali son berilgan. Uning raqamlar yig`indisini aniqlovchi programma tuzilsin.
// let abc = 123;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;
// console.log(a + b + c);
//! Integer3. Uch xonali son berilgan. Uning raqamlarini teskari tartibda yozishdan hosil bo`lgan sonni aniqlovchi program tuzilsin.

// let abc = 123;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;
// console.log(c * 100 + b * 10 + a);
//! Integer4. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// Input: 123
// Output: 213

// let abc = 123;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;
// console.log(b * 100 + a * 10 + c);

//! Integer5. Uch xonali son berilgan. Uning o`nliklar xonasidagi raqam bilan birliklar xonasidagi raqamni almashtirishdan hosil bo`lgan sonni aniqlovchi programma tuzilsin.
// Input: 123
// Output: 132
// let abc = 123;
// let c = abc % 10;
// let b = ((abc - c) / 10) % 10;
// let a = (abc - b * 10 - c) / 100;
// console.log(b * 100 + c * 10 + b);

//! Integer6. 999 dan katta bo`lgan son berilgan. Bir marta bo`lib butunni va bo`lib qoldiqni olish operatsiyasidan foydalanib berilgan sonni mingliklar xonasidagi sonni aniqlovchi programma tuzilsin.
// Input: 98123
// Output: 8

// 1 minut = 60 s
// 1 soat = 60 minut
// 1 soat = 3600s
// 1 sutka = 24 soat

//! Integer7. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha minut to'la o`tganligini aniqlovchi programma tuzilsin.
// let n = 11400;
// let t = n % 3600;
// sekund = t % 60;
// let minut = (t - sekund) / 60;
// let hour = (n - t) / 3600;

// console.log(hour, minut, sekund);
//! Integer8. Kun boshidan boshlab N sekund vaqt o'tti. Kun boshidan boshlab qancha to'la soat o`tganligini aniqlovchi programma tuzilsin.
// let n = 11400;
// let t = n % 3600;
// sekund = t % 60;
// let minut = (t - sekund) / 60;
// let hour = (n - t) / 3600;

// console.log(hour, minut, sekund);

//! Integer9. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha minut va sekund o'tganini aniqlovchi programma tuzilsin.
// let n = 11400;
// let t = n % 3600;
// sekund = t % 60;
// let minut = (t - sekund) / 60;
// let hour = (n - t) / 3600;

// console.log(hour, minut, sekund);

//! Integer10. Kun boshidan boshlab N sekund vaqt o`tti. Kun boshidan boshlab qancha soat va sekund o'tganini aniqlovchi programma tuzilsin.

// let n = 11400;
// let t = n % 3600;
// sekund = t % 60;
// let minut = (t - sekund) / 60;
// let hour = (n - t) / 3600;

// console.log(hour, minut, sekund);
