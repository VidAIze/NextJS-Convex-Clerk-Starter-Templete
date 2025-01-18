import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    tokenIdentifier: v.string(),
    email: v.string(),
    imageUrl: v.string(),
    lastLoginAt: v.optional(v.number()),
  }).index("by_token", ["tokenIdentifier"]),

  posts: defineTable({
    title: v.string(),
    content: v.string(),
    authorId: v.id("users"),
  }).index("by_author", ["authorId"]),
}); 