## 🔌 API Integration

The application connects to a backend API with the following endpoints:

- `/guardians` - Guardian management
- `/pets` - Pet management
- `/appointments` - Appointment management

Configure the API base URL in `src/api-services/axios-instance.tsx`.

## 🎨 Features Overview

### Dashboard

- Overview of appointments, pets, and guardians
- Quick statistics and metrics
- Upcoming appointments list

### Pet Management

- Complete CRUD for pets

Sample POST `/pets`
request:

```json
{
  "name": "pet name",
  "species": "species",
  "breed": "breed",
  "age": 1,
  "guardianId": 1 (existing guardian id)
}
```

response:

```json
{
  "id": 6,
  "name": "pet name",
  "species": "species",
  "breed": "breed",
  "age": 1,
  "guardian": {
    "id": 1,
    "name": "guardian name",
    "email": "guardian@email.com",
    "phone": "612345678",
    "address": "guardian address"
  }
}
```

Sample PUT `/pets/:id`
request:

```json
{
  "name": "pet name updates ",
  "species": "species updates",
  "breed": "breed updates",
  "age": 2,
  "guardianId": 5 (existing guardian id)
}
```

response:

```json
{
  "id": 6,
  "name": "pet name updates",
  "species": "species updates",
  "breed": "breed updates",
  "age": 2,
  "guardian": {
    "id": 5,
    "name": "guardian name",
    "email": "guardian@email.com",
    "phone": "612345610",
    "address": "guardian address"
  }
}
```

Sample DELETE `/pets/:id` request:

```json
{}
```

Sample GET `/pets` response:

```json
[
  {
    "id": 1,
    "name": "pet name",
    "species": "species",
    "breed": "breed",
    "age": 1,
    "guardian": {
      "id": 1,
      "name": "guardian name",
      "email": "guardian@email.com",
      "phone": "612345678",
      "address": "guardian address"
    }
  }
]
```

### Guardian Management

- Get guardians list
  Sample GET `/guardians` response:

```json
[
  {
    "id": 1,
    "name": "guardian name",
    "email": "guardian@email.com",
    "phone": "612345678",
    "address": "guardian address"
  }
]
```

Sample POST `/guardians`

request:

```json
{
  "name": "guardian name",
  "email": "guardian@email.com",
  "phone": "612345678",
  "address": "guardian address"
}
```

response:

```json
{
  "id": 6,
  "name": "guardian name",
  "email": "guardian@email.com",
  "phone": "612345678",
  "address": "guardian address"
}
```

Sample PUT `/guardians/:id` request:

```json
{
  "name": "guardian name updates",
  "email": "guardian-updates@email.com",
  "phone": "612345610",
  "address": "guardian address updates"
}
```

response:

```json
{
  "id": 6,
  "name": "guardian name updates",
  "email": "guardian-updates@email.com",
  "phone": "612345610",
  "address": "guardian address updates"
}
```

Sample DELETE `/guardians/:id` response:

No content

Get guardians by name
Sample GET `/guardians?name=guardian_name` response:

```json
[
  {
    "id": 1,
    "name": "guardian name",
    "email": "guardian@email.com",
    "phone": "612345678",
    "address": "guardian address"
  }
]
```

### Appointment Management

- Get appointments list

Sample GET `/appointments` response:

```json
[
  {
    "id": 1,
    "date": "2024-01-01",
    "time": "10:00",
    "reason": "reason",
    "pet": {
      "id": 1,
      "name": "pet name",
      "species": "species",
      "breed": "breed",
      "age": 1,
      "guardian": {
        "id": 1,
        "name": "guardian name",
        "email": "guardian@email.com",
        "phone": "612345678",
        "address": "guardian address"
      }
    }
  }
]
```

- Create appointment
  Sample POST `/appointments` request:

```json
{
  "date": "2024-01-01",
  "time": "10:00",
  "reason": "reason",
  "petId": 1 (existing pet id)
}
```

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Icons by [Lucide React](https://lucide.dev)
- UI Framework by [TailwindCSS](https://tailwindcss.com)
