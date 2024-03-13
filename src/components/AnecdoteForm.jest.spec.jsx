import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import AnecdoteForm from './AnecdoteForm'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import anecdoteReducer from '../reducers/anecdoteReducer'

const mockStore = configureStore({
  reducer: {
    anecdotes: anecdoteReducer,
  }
})

describe('<AnecdoteForm />', () => {
  test('anecdote form renders correctly', () => {
    render(<Provider store={mockStore}><AnecdoteForm /></Provider>)
    expect(screen.getByRole('form')).toBeDefined()
  })
})
