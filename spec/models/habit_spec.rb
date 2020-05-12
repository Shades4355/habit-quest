require 'rails_helper'

RSpec.describe Habit, type: :model do
  it { should have_valid(:name).when("nap")}
  it { should have_valid(:value).when(-1)}

  it { should_not have_valid(:value).when(nil, "", "three") }
end
