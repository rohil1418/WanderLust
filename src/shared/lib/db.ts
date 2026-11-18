import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI .env.local me define karo");
}

type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

const globalWithCache = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

const cache: MongooseCache = globalWithCache.mongooseCache ?? {
  conn: null,
  promise: null,
};
globalWithCache.mongooseCache = cache;

export async function connectDB() {
  if (cache.conn) return cache.conn;

  cache.promise ??= mongoose.connect(MONGODB_URI, { bufferCommands: false });
  cache.conn = await cache.promise;

  return cache.conn;
}