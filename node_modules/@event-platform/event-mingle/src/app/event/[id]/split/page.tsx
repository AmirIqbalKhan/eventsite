import React from 'react'

export default function CostSplitPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center">
        <div className="relative z-10 text-center px-4 pt-32">
          <h1 className="festival-title mb-4">Cost Split</h1>
          <p className="festival-subtitle text-white/90">
            Manage and split event expenses with ease
          </p>
        </div>
      </section>

      {/* Cost Split Content */}
      <section className="festival-section relative">
        <div className="festival-container relative z-40">
          <div className="glass-effect rounded-2xl p-8 max-w-4xl mx-auto -mt-32">
            {/* Event Summary */}
            <div className="festival-card p-6 mb-8">
              <h2 className="festival-section-title text-2xl mb-4">Event Summary</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-white/70">Total Cost</p>
                  <p className="text-2xl font-bold text-white">$1,200.00</p>
                </div>
                <div>
                  <p className="text-white/70">Split Between</p>
                  <p className="text-2xl font-bold text-white">4 People</p>
                </div>
              </div>
            </div>

            {/* Expense List */}
            <div className="festival-card p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="festival-section-title text-2xl">Expenses</h2>
                <button className="festival-button">Add Expense</button>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Venue Rental', amount: 500, paidBy: 'John' },
                  { name: 'Catering', amount: 400, paidBy: 'Sarah' },
                  { name: 'Decorations', amount: 300, paidBy: 'Mike' },
                ].map((expense, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-white">{expense.name}</h3>
                      <p className="text-sm text-white/60">Paid by {expense.paidBy}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-white">${expense.amount.toFixed(2)}</p>
                      <p className="text-sm text-white/60">${(expense.amount / 4).toFixed(2)} each</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Settlement Summary */}
            <div className="festival-card p-6">
              <h2 className="festival-section-title text-2xl mb-6">Settlement Summary</h2>
              <div className="space-y-4">
                {[
                  { name: 'John', owes: 150, to: 'Sarah' },
                  { name: 'Mike', owes: 75, to: 'Sarah' },
                  { name: 'Alice', owes: 225, to: 'John' },
                ].map((settlement, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div>
                      <h3 className="font-semibold text-white">{settlement.name}</h3>
                      <p className="text-sm text-white/60">owes {settlement.to}</p>
                    </div>
                    <p className="font-semibold text-primary-400">${settlement.owes.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 