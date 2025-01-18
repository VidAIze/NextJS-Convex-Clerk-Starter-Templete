import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default {
  providers: [
    {
      domain: "https://stable-sparrow-90.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
}; 