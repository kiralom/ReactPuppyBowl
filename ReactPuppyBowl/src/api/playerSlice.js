import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl =
  "https://fsa-puppy-bowl.herokuapp.com/api/2401-GHP-ET-WEB-FT-SF/";

export const playersApi = createApi({
  reducerPath: "playersApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getPlayers: builder.query({
      query: () => `players`,
    }),
    getSinglePlayer: builder.query({
      query: (id) => `players/${id}`,
    }),
    deletePlayer: builder.mutation({
      query: (id) => ({
        url: `players/${id}`,
        method: "DELETE",
      }),
    }),
    createPlayer: builder.mutation({
      query: (newPlayerData) => ({
        url: "players",
        method: "POST",
        body: newPlayerData,
      }),
    }),
  }),
});

export const {
  useGetPlayersQuery,
  useGetSinglePlayerQuery,
  useDeletePlayerMutation,
  useCreatePlayerMutation,
} = playersApi;
