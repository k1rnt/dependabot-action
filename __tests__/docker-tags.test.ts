import {UPDATER_IMAGE_NAME, PROXY_IMAGE_NAME} from '../src/docker-tags'
import {getImageName} from '../src/update-containers'

describe('Docker tags', () => {
  test('UPDATER_IMAGE_NAME uses a pinned version and matches the config Dockerfile', () => {
    expect(UPDATER_IMAGE_NAME).toMatch(
      /^docker\.pkg\.github\.com\/dependabot\/dependabot-updater@sha256:[a-zA-Z0-9]{64}$/
    )

    expect(UPDATER_IMAGE_NAME).toEqual(getImageName('Dockerfile.updater'))
  })

  test('PROXY_IMAGE_NAME uses a pinned version and matches the config Dockerfile', () => {
    expect(PROXY_IMAGE_NAME).toMatch(
      /^docker\.pkg\.github\.com\/github\/dependabot-update-job-proxy@sha256:[a-zA-Z0-9]{64}$/
    )

    expect(PROXY_IMAGE_NAME).toEqual(getImageName('Dockerfile.proxy'))
  })
})
