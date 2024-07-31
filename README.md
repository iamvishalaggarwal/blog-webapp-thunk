# Redux & Redux Toolkit

- redux is a core library
- react-redux is an implementation of redux using react (used for wiring between react & redux)

- following are the steps of using redux-toolkit :
  - build store (mostly have single store - known as single source of truth) - createStore

  - add features (slice - term used for representing reducers) - createSlice
    -- createSlice contains - name, initialState, reducers
    -- the name which we give here, will be shown on browser redux toolkit dev extension
    -- reducers contains all type of actions which we need to perform for that feature
    -- the function which we write inside reducer, contains two things - state and action, in which state contains the data which we store as a initialState but with updated and action contains the payload part

  - whenever we need to perform any action we need to store **useDispatch()**
  - when we need to read the value - **useSelector()** is used

Note:

- redux uses immer.js for handling immutable states functionality internally

## Thunk - Redux Middleware

- the word 'thunk' is a programming term that means "a piece of code that does some delayed work"
- used for writing standard async logic for redux

## Optimisation -

- we can use React.memo() for avoiding multiple re-renders of component
- Normalization - using "createEntityAdapter()"
