import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface commentsSlice {
  value: Comment[];
  status: "initial" | "complete" | "loading" | "failed";
  error: string | undefined;
}

export interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

function isCommentReceived(obj: any): obj is Comment {
  return (
    typeof obj.postId === "number" &&
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    typeof obj.body === "string"
  );
}

export const fetchComments = createAsyncThunk<Comment[], void, {}>(
  "counter/fetchCount",
  async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    );

    const data = await response.json();

    //type-guard
    const isAllComments =
      Array.isArray(data) && data.every((item) => isCommentReceived(item));

    if (!isAllComments) {
      throw new Error("Invalid data format!"); // This will lead to rejected action
    }

    return data;
  }
);

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    value: [],
    status: "initial",
    error: undefined,
  } as commentsSlice,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchComments.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "complete";
        state.value = action.payload;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// Action creators are generated for each case reducer function
export const {} = commentsSlice.actions;

export default commentsSlice.reducer;
