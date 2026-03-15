# CyberClub Booking API (ПК-клуб "228")

## Описание
API для системы бронирования игровых мест в компьютерном клубе. Позволяет геймерам выбирать мощные ПК, а админам — управлять парком машин.

## Сущности
- User: Игроки и администраторы.
- Computer: Игровые станции (Standard, VIP, Bootcamp).
- Booking: Сессии бронирования с проверкой наложений по времени.

## Технологический стек
- Runtime: Node.js
- Framework: Express.js
- Database: PostgreSQL / MySQL
- Auth: JWT