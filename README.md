# GraphQL Schema

```bash 
type EventProperties {
  mag: Float
  place: String
  time: Float
  updated: Float
  tz: String
  url: String
  detail: String
  felt: String
  cdi: String
  mmi: String
  alert: String
  status: String
  tsunami: Float
  sig: Float
  net: String
  code: String
  ids: String
  sources: String
  types: String
  nst: Float
  dmin: Float
  rms: Float
  gap: Float
  magType: String
  type: String
  title: String
}

type EventGeometry {
  type: String!
  coordinates: [Float!]!
}

type Event {
  type: String!
  properties: EventProperties!
  geometry: EventGeometry!
  id: String!
}

type EventListing {
    data: [Event]
    hasNextPage: boolean
}

type OperationResult {
    success: Boolean!
}
type EventUpdateType {
  type: String
  properties: EventProperties
  geometry: EventGeometry
}

type Query {
  events(date: String, country: String, state: String, skip: Float, limit: Float): EventListing!
  event(id: String!): Event!
}

type Mutation {
    updateEvent(id: String, data: EventUpdateType): OperationResult!
}
```
# Possible things to do:
1. Depending on use case I would add pagination for listing events, or limit listing and return more details in specific event query.
2. Handle errors with error's codes.
3. Clean data, as probably some of properties are not relevant.
4. Add proper graphql api endpoint (currently only playground is enabled).
5. Add logger for errors.
6. Probably it would be good to move data loading logic to some cloud functions(e.g. AWS Lambda) and schedule loading time.
7. As events data has updated property, we shoud be able to handle updating stored data, for past dates.



# Running project:
You have to have docker installed.
In project's root directory run:
```bash
docker compose up
```
It would start Nest.JS app and mongoDB
App is accessible on localhost:5001/graphql
To access app container:
```bash
docker compose run --rm backend bash
```
Data loading function would run only once for past dates, if db collection is empty.