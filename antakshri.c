#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <time.h>

#define MAX_WORD_LENGTH 50

int main() {
    char previousWord[MAX_WORD_LENGTH];
    char currentWord[MAX_WORD_LENGTH];
    clock_t startTime, endTime;
    double elapsedTime;

    printf("Let's play Antakshari!\n");
    printf("Enter a word to start: ");
    scanf("%s", previousWord);

    printf("You start with the letter '%c'.\n", previousWord[0]);

    startTime = clock(); // Start the timer

    while (1) {
        printf("Enter a word starting with '%c' (or type 'exit' to quit): ", previousWord[strlen(previousWord) - 1]);
        scanf("%s", currentWord);

        if (strcmp(currentWord, "exit") == 0) {
            printf("Thanks for playing!\n");
            break;
        }

        if (currentWord[0] != previousWord[strlen(previousWord) - 1]) {
            printf("Word should start with the last letter of the previous word. You lose!\n");
            break;
        }

        printf("Word '%s' accepted. Keep going!\n", currentWord);
        strcpy(previousWord, currentWord);
    }

    endTime = clock(); // End the timer
    elapsedTime = (double)(endTime - startTime) / CLOCKS_PER_SEC; // Calculate elapsed time

    printf("Elapsed time: %.2f seconds.\n", elapsedTime);

    return 0;
}
