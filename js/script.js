          $(function() {
              var now = new Date();
              $('.screen-content').fbMessenger({
                  botName: 'Tute',
                  botBannerUrl: '',
                  botLogoUrl: 'https://botpreview.com/api/image/wB66',
                  botWelcomeMessage: 'Welcome to Tute!\u00A0',
                  likes: {
                      totalCount: 12345,
                      friendName: '',
                      otherFriendsCount: 42
                  },
                  botCategory: 'Education',
                  leftUser: 'left',
                  rightUser: 'right',
                  timeScale: 1,
                  locale: 'en',
                  displayedCarrier: 'o2-de',
                  persistentMenu: [{"label":"","children":[{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]}]},{"label":"","children":[{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]}]},{"label":"","children":[{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]},{"label":"","children":[{"label":""},{"label":""},{"label":""},{"label":""},{"label":""}]}]}]
              })
              .fbMessenger('start', { delay: 2000, timestamp: now } )
      .fbMessenger('message', 'right', 'Hi, can you help me with this question? I\'m stuck', { delay: 500, timestamp: now } )
      .fbMessenger('message', 'right', 'Here is a photo of the question.', { delay: 1000, timestamp: now } )
      .fbMessenger('imageAttachment', 'right', 'https://botpreview.com/api/image/wB6Q', { delay: 1000, timestamp: now } )
      .fbMessenger('typingIndicator', { delay: 500, timestamp: now } )
      .fbMessenger('message', 'left', 'Hi there, thanks for your question. Can you tell me what you\'ve tried so far? It would be great if you could also send me a photo of your work.', { delay: 2000, timestamp: now } )
      .fbMessenger('typingIndicator', { delay: 500, timestamp: now } )
      .fbMessenger('message', 'right', 'I\'ve written down the equations for energy before and after the explosion but I\'m not sure where to go from there.', { delay: 1000, timestamp: now } )
      .fbMessenger('imageAttachment', 'right', 'https://botpreview.com/api/image/wBQk', { delay: 1000, timestamp: now } )
      .fbMessenger('typingIndicator', { delay: 500, timestamp: now } )
      .fbMessenger('message', 'left', 'Great, you\'re on the right track. Now think for a moment - is there something else, apart from energy, that you should consider?', { delay: 2000, timestamp: now } )
      .fbMessenger('typingIndicator', { delay: 500, timestamp: now } )
      .fbMessenger('message', 'right', 'Momentum, maybe?', { delay: 1000, timestamp: now } )

              .fbMessenger('run');
          });