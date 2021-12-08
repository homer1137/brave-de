import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const paymentsApi = createApi ({
     reducerPath: 'paymentsApi',
     tagTypes: ['Payments'],
     baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001/'}),
     endpoints: (build) => ({
         getPayments: build.query({
             query: (limit='') => `payments?_limit=${limit}`,
             providesTags: (result) =>
             result
               ? [
                   ...result.map(({ id }) => ({ type: 'Payments', id })),
                   { type: 'Payments', id: 'LIST' },
                 ]
               : [{ type: 'Payments', id: 'LIST' }],
         }),
         addPayment: build.mutation({
            query: (body) => ({
                url: 'payments',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Payments', id: 'LIST'}]
         }),
     }),
});

export const {useGetPaymentsQuery, useAddPaymentMutation} = paymentsApi;