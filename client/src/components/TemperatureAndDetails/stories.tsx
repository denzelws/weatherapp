import { Story, Meta } from '@storybook/react'
import TemperatureAndDetails from '.'

export default {
  title: 'TemperatureAndDetails',
  component: TemperatureAndDetails
} as Meta

export const Default: Story = () => <TemperatureAndDetails />
